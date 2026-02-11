// API functions for songs CRUD
// NOTE: Replace BASE_URL with your backend API endpoint
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'; // Adjust as needed

export async function getSongs() {
  const res = await axios.get(`${BASE_URL}/songs`);
  // Expect { songs: [...], count: N }
  return res.data;
}

export async function getSong(id) {
  const res = await axios.get(`${BASE_URL}/songs/editsong/${id}`);
  return res.data;
}

export async function addSong(song) {
  // song: { artist, track, link }
  await axios.post(`${BASE_URL}/songs/addsong`, song);
}

export async function updateSong(song) {
  // song: { artist, track, link, song_id }
  await axios.post(`${BASE_URL}/songs/updatesong`, song);
}

export async function deleteSong(id) {
  await axios.get(`${BASE_URL}/songs/deletesong/${id}`);
}

export async function getSongCount() {
  const res = await axios.get(`${BASE_URL}/songs/ajaxGetStats`);
  return res.data.amount_of_songs || res.data;
}
