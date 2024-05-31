import { GrCatalog } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { FaRegSmile } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Nav2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [searchValue, setSearchValue] = useState("")
    // const [filteredData, setFilterData] = useState(null)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setData(data.products))
    })
    const handleSearch = (data) => {
        return data?.filter(user => user.title.toUpperCase().includes(searchValue.toUpperCase().trim()))
    }
    console.log(handleSearch(data));

    return (
        <>
            <div className="div">
                <nav className="nav">
                    <div className="logo_txt">
                        <Link className="link" to={"/"}><h1>AliExpress</h1></Link>
                    </div>
                    <div className="input">
                        <Link to={"/"}><button><span><GrCatalog /></span><br />Каталог</button></Link>
                        <div className="search">
                            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
                            <button className="search_btn">Найти</button>
                        </div>
                        <Link to={"/like"}><button><span><FaHeart /></span><br />Лайк</button></Link>
                        <Link to={"/cart"}><button><span><SlBasket /></span><br />Корзина</button></Link>
                        <Link to={"/login"}><button><span><FaRegSmile /></span><br />Войти</button></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav2
