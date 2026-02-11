// Edit Song page
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SongEditForm from '../components/SongEditForm';
import { getSong, updateSong } from '../api/songs';

const EditSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      try {
        const data = await getSong(id);
        setSong(data);
        setError(null);
      } catch (e) {
        setError('Song not found');
      } finally {
        setLoading(false);
      }
    };
    fetchSong();
  }, [id]);

  const handleUpdateSong = async (updatedSong) => {
    try {
      await updateSong(updatedSong);
      navigate('/songs');
    } catch (e) {
      setError('Failed to update song');
    }
  };

  if (loading) return <section className="container">Loading...</section>;
  if (error) return <section className="container" role="alert">{error}</section>;

  return (
    <section className="container" aria-labelledby="editsong-title">
      <h2 id="editsong-title">You are in the View: application/view/song/edit.php (everything in this box comes from that file)</h2>
      <div>
        <h3>Edit a song</h3>
        <SongEditForm song={song} onSubmit={handleUpdateSong} />
      </div>
    </section>
  );
};

export default EditSong;
