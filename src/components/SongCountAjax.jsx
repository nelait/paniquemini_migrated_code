// AJAX song count demo component
import React, { useState } from 'react';
import { getSongCount } from '../api/songs';

const SongCountAjax = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const num = await getSongCount();
      setCount(num);
    } catch {
      setCount('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button type="button" id="javascript-ajax-button" onClick={handleClick} disabled={loading}>
        Click here to get the amount of songs via Ajax (will be displayed in #javascript-ajax-result-box)
      </button>
      <div id="javascript-ajax-result-box" style={{ marginTop: 8 }}>{count !== null && <span>{count}</span>}</div>
    </div>
  );
};

export default SongCountAjax;
