// components/MauticTracking.js

import { useEffect } from 'react';

const MauticTracking = () => {
  useEffect(() => {
    // Define the Mautic tracking script
    (function(w,d,t,u,n,a,m){
      w['MauticTrackingObject'] = n;
      w[n] = w[n] || function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
      m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
    })(window, document, 'script', 'https://connect.smartysoft.in/mtc.js', 'mt');

    // Send pageview
    mt('send', 'pageview');

    // Clean up function
    return () => {
      // If necessary, clean up any resources here
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return null; // This component doesn't render anything
};

export default MauticTracking;
