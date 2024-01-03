import { message } from 'antd';
import { firestore } from 'config/firebase';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import React, { createContext, useState } from 'react';


export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [allProduts, setAllProduts] = useState([]);

    let getProduct = async () => {
        const q = query(collection(firestore, "productDetail"));
        try {
            const querySnapshot = await getDocs(q);
            const array = [];

            querySnapshot.forEach((doc) => {
                let data = doc.data();
                array.push(data);

            });
            setProducts(array);
            setAllProduts(array);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }

    };
    
    
    
    const handleDelete = async (productDetail) => {

        try {
            await deleteDoc(doc(firestore, "productDetail", productDetail.id));

            let documentsAfterDelete = products.filter(doc => doc.id !== productDetail.id)
            setAllProduts(documentsAfterDelete)
            setProducts(documentsAfterDelete)

            message.success("Book deleted successfully")
        } catch (err) {
            console.error(err)
            message.error("something went wrong while delting Book")
        }
    }



    return (
        <ProductContext.Provider value={{ products, getProduct, handleDelete,  }}>
            {children}
        </ProductContext.Provider>
    );
}
