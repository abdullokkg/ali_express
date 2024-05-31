// import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
// import { useEffect, useState } from "react"
// import { FaCartPlus } from "react-icons/fa"
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { cartproducts } from "../../redux/slice2/cartSlice";
// import { likeProduct } from "../../redux/slice/likeSlice";
// import { ID } from "../../redux/slice3/ids";

// const Products = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//     const [banner, setBanner] = useState([])
//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then(response => response.json())
//             .then(data => setBanner(data.products))
//     })
//     const handleup2 = (phone2) => {
//         dispatch(likeProduct(phone2))
//         console.log(phone2);
//         navigate("/like")
//     }
//     const handleup = (phone2) => {
//         dispatch(cartproducts(phone2))
//         console.log(phone2);
//         navigate("/cart")
//     }
//     const handleup3 = (phone2) => {
//         dispatch(ID(phone2))
//         console.log(phone2);
//         navigate("/id")
//     }
//     return (
//         <div className="clothes">
//         {
//             banner.map(furnitur =>
//                 <Card key={furnitur.id}  className='cosmetic_card2' sx={{ maxWidth: 345 }} >
//                     <div onClick={() => handleup3(furnitur)}>
//                         <CardMedia
//                             component="img"
//                             height="200"
//                             image={furnitur.images[0]}
//                             alt="Smartphone"
//                         />
//                         <CardContent>
//                             <Typography variant="body2" color="text.secondary">
//                                 ${furnitur.price}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {furnitur.title}
//                             </Typography>
//                         </CardContent>
//                     </div>
//                     <IconButton onClick={() => handleup(furnitur)} aria-label="add to favorites">
//                         <FaCartPlus />
//                     </IconButton>
//                     <IconButton onClick={() => handleup2(furnitur)} aria-label="add to favorites">
//                         <FavoriteIcon/>
//                     </IconButton>
//                 </Card>
//             )
//         }
//     </div>
//     )
// }

// export default Products
