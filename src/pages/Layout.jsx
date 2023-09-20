import { useState } from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
export default function Layout({children}){
    const [searchInput, setSearchInput] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }
    const openModal = () => {
        setModalOpen(true)
    }

    return (
        <>
        <Navbar searchInput={searchInput} setSearchInput={setSearchInput} openModal={openModal} />
        <main>

        </main>
        </>
    )

}