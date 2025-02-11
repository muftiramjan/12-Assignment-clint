import { FaTrashAlt } from "react-icons/fa";
import Usecart from "../../Hoks/usehoks/usecart/Usecart";
import Swal from "sweetalert2";
import UseAxios from "../../Hoks/usehoks/useAxos/UseAxios";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart,refetch] = Usecart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSicoer = UseAxios();

    const handeldelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSicoer.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <p className="text-4xl">Classes {cart?.length}</p>
                <p className="text-4xl">total price {totalPrice}</p>
               {cart.length?  <Link to='/dashbort/paymant'>
                <button className="btn btn-primary">pey</button>
                </Link>:<button className="btn btn-primary">pey</button>}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id} >
                                <th>
                                    {index}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handeldelete(item._id)}
                                        className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;