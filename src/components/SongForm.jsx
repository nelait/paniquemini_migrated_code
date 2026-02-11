// Add Song form component
import React, { useState } from 'react';

const initialState = { artist: '', track: '', link: '' };

const SongForm = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.artist.trim()) errs.artist = 'Artist is required';
    if (!form.track.trim()) errs.track = 'Track is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit(form);
      setForm(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Add Song">
      <label htmlFor="artist">Artist</label>
      <input
        id="artist"
        name="artist"
        type="text"
        value={form.artist}
        onChange={handleChange}
        required
        aria-invalid={!!errors.artist}
        aria-describedby={errors.artist ? 'artist-error' : undefined}
        autoFocus
      />
      {errors.artist && <div id="artist-error" style={{ color: 'red' }}>{errors.artist}</div>}

      <label htmlFor="track">Track</label>
      <input
        id="track"
        name="track"
        type="text"
        value={form.track}
        onChange={handleChange}
        required
        aria-invalid={!!errors.track}
        aria-describedby={errors.track ? 'track-error' : undefined}
      />
      {errors.track && <div id="track-error" style={{ color: 'red' }}>{errors.track}</div>}

      <label htmlFor="link">Link</label>
      <input
        id="link"
        name="link"
        type="text"
        value={form.link}
        onChange={handleChange}
        aria-describedby={errors.link ? 'link-error' : undefined}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default SongForm;
