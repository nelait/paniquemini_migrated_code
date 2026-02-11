// Songs List page (CRUD)
import React, { useEffect, useState } from 'react';
import SongTable from '../components/SongTable';
import SongForm from '../components/SongForm';
import SongCountAjax from '../components/SongCountAjax';
import { getSongs, getSongCount, addSong, deleteSong } from '../api/songs';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [songCount, setSongCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSongs = async () => {
    setLoading(true);
    try {
      const data = await getSongs();
      setSongs(data.songs);
      setSongCount(data.count);
      setError(null);
    } catch (e) {
      setError('Failed to load songs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleAddSong = async (song) => {
    try {
      await addSong(song);
      fetchSongs();
    } catch (e) {
      setError('Failed to add song');
    }
  };

  const handleDeleteSong = async (id) => {
    if (!window.confirm('Are you sure you want to delete this song?')) return;
    try {
      await deleteSong(id);
      fetchSongs();
    } catch (e) {
      setError('Failed to delete song');
    }
  };

  return (
    <section className="container" aria-labelledby="songs-title">
      <h2 id="songs-title">You are in the View: application/view/song/index.php (everything in this box comes from that file)</h2>
      <div className="box">
        <h3>Add a song</h3>
        <SongForm onSubmit={handleAddSong} />
      </div>
      <div className="box">
        <h3>Amount of songs (data from second model)</h3>
        <div>{songCount}</div>
        <h3>Amount of songs (via AJAX)</h3>
        <SongCountAjax />
        <h3>List of songs (data from first model)</h3>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div role="alert" style={{ color: 'red' }}>{error}</div>
        ) : (
          <SongTable songs={songs} onDelete={handleDeleteSong} />
        )}
      </div>
    </section>
  );
};

export default Songs;
