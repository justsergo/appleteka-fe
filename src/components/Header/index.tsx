import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button onClick={onClose}>Закрыть</button>
            <span>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;