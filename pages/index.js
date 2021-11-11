import Head from 'next/head';
import data from './data.json';
const fs = require('fs');
import axios from 'axios';
import Image from 'next/image';

const onSubmit = async (e) => {
    const { id } = router.query
    const { title, body } = content;
    console.log(id, title, body);
    await axios.put(`/api/entry/${id}`, {
        slug: dashify(title),
        title,
        body,
    });
}

const writeJSON = () => {
    const updatedJSON = {
        "name":"arif updated",
        "surname":"shariati updated"
    };

    const fileData = JSON.stringify(updatedJSON);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'data.json';
    link.href = url;
    link.click();
};

const cover = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  objectFit: 'contain',
  zIndex: 0
};

const coverOverlay = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    objectFit: 'cover',
    zIndex: 1,
    // backgroundColor: '#A57C00',
    backgroundColor: 'pink',
    opacity: 0.3
};

const coverLetter = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    fontSize: '21px',
    color: 'salmon',
    marginTop: '54px',
    textAlign: 'center',
    width: '100%'
}

const buttonOpen = {
    border: 'none',
    background: 'salmon',
    color: 'white',
    fontSize: '21px',
    marginTop: '7px',
    padding: '7px 15px',
    borderRadius: '7px'
}

export default function Home() {
  return (
    <div>
        <div style={coverLetter}>
            <div>
                Kepada Yth.
                <strong style={{marginLeft: '5px'}}>
                    Dr. Kristin
                </strong>
            </div>
            <button style={buttonOpen}>
                Buka Undangan
            </button>
        </div>
        <div>
            <div style={coverOverlay}/>
            <img style={cover} src="/cover.jpg" />
        </div>
    </div>
  )
}
