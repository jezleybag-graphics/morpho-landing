import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useCommunityStats() {
  const [stats, setStats] = useState({
    count: 0,
    avatars: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const [countResponse, avatarsResponse] = await Promise.all([
          // Get exact total count of all CUSTOMER profiles
          supabase
            .from('profiles')
            .select('id', { count: 'exact', head: true })
            .eq('role', 'customer'),
            
          // Get the latest few CUSTOMER profiles that actually have an avatar_url
          supabase
            .from('profiles')
            .select('avatar_url')
            .eq('role', 'customer')
            .not('avatar_url', 'is', null)
            .order('created_at', { ascending: false })
            .limit(3)
        ]);

        if (countResponse.error) throw countResponse.error;
        if (avatarsResponse.error) throw avatarsResponse.error;

        if (isMounted) {
          setStats({
            count: countResponse.count || 0,
            avatars: avatarsResponse.data.map(p => p.avatar_url),
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        console.error('Error fetching community stats:', error);
        if (isMounted) {
          setStats(prev => ({
            ...prev,
            isLoading: false,
            error: error.message,
          }));
        }
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
}
