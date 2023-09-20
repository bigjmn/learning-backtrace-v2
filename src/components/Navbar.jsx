import { useAuth } from "../hooks/useAuth";
import { useLogout } from "../hooks/useLogout";
export default function Navbar({searchInput, setSearchInput, openModal}){
    const { user } = useAuth()
    const { logout, isPending } = useLogout()

    return (
        <nav>
            <h2>LearnGraph</h2>
            <input 
                type="text"
                className="cursor-pointer text-md" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
            />
            <div>
                {user ? (
                    <>
                    <p>{user.displayName}</p>
                    {!isPending && <button className="btn-primary" onClick={logout}>Log out</button>}
                    {isPending && <button className="btn-primary" disabled>Logging out</button>}
                    </>
                ) : (
                    <>
                    <button oncClick={openModal}>Log in</button>
                    </>
                )}
            </div>
        </nav>
    )
}