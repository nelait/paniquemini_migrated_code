// Song table component
import React from 'react';
import { Link } from 'react-router-dom';

const SongTable = ({ songs, onDelete }) => (
  <table>
    <thead style={{ backgroundColor: '#ddd', fontWeight: 'bold' }}>
      <tr>
        <td>Id</td>
        <td>Artist</td>
        <td>Track</td>
        <td>Link</td>
        <td>DELETE</td>
        <td>EDIT</td>
      </tr>
    </thead>
    <tbody>
      {songs.length === 0 ? (
        <tr>
          <td colSpan={6}>No songs found.</td>
        </tr>
      ) : (
        songs.map((song) => (
          <tr key={song.id}>
            <td>{song.id}</td>
            <td>{song.artist}</td>
            <td>{song.track}</td>
            <td>
              {song.link && (
                <a href={song.link} target="_blank" rel="noopener noreferrer">{song.link}</a>
              )}
            </td>
            <td>
              <button type="button" onClick={() => onDelete(song.id)} aria-label={`Delete song ${song.track}`}>delete</button>
            </td>
            <td>
              <Link to={`/songs/editsong/${song.id}`}>edit</Link>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
);

export default SongTable;
