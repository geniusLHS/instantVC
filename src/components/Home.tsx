import Header from './Header';
import Link from './Link';
import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import ParticipantProfiles from './ParticipantProfiles';
import StatusSettingArea from './StatusSettingArea';

const clientSocket = io(process.env.REACT_APP_SERVER ?? 'react_app_server_undefined', {
  transports: ['websocket'],
  upgrade: false,
  forceNew: true,
});

function Home() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  let location = useLocation();

  useEffect(() => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const roomNameInURL = urlParams.get('room');

    if (!roomNameInURL) {
      setUsername('Alice');
      clientSocket.emit('new_room');
    } else if (roomNameInURL) {
      setRoom(roomNameInURL);
      setUsername('Bob');
      clientSocket.emit('join_room', { username: 'Bob', room: roomNameInURL });
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex min-w-[40rem] flex-col items-center">
        <Header></Header>
        <ParticipantProfiles></ParticipantProfiles>
        <StatusSettingArea name="닉네임"></StatusSettingArea>
      </div>
    </div>
  );
}

export default Home;
