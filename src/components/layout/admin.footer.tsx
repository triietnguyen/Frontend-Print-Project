'use client'

import { Layout } from "antd";


const AdminFooter = () => {
    const {  Footer } = Layout;
    return (
        <>
        <Footer style={{ textAlign: 'center' }}>
                Chiet Nguyen ©{new Date().getFullYear()} Created by Chiet Nguyen
            </Footer>
        </>
    )
}

export default AdminFooter;