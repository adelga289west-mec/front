import React, { useState, useEffect } from 'react'

import Header from '../component/Header'
import ContactList from '../component/ContactList'
import OpenChat from '../components/OpenChat'

const Home = ({ user, logout }) => {
    const [openChat, setOpenChat] = useState();

    return (
        <>
            <Header username={user.username} logout={logout} link={"/create-room"}
                icon={"bi-person-plus-fill"} />
            <div id='chats'>
                <ContactsList user={user} setOpenChat={setOpenChat} />
                {openChat ?
                    <OpenChat user={user} openChat={openChat} />
                :
                <div id='openChat'>
                    <h2>Select a user/room to start a chat</h2>
                    </div>
                }
            </div>
        </>
    )
}

export default Home