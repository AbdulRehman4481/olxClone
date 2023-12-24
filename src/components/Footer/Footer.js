import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()
    return (
        <footer style={{ backgroundColor: "#002F34" }}>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <p className="mb-0 py-3 text-end" style={{ fontWeight: "bold", fontSize: "12px", color: "white" }}>Free Classifieds in Pakistan. &copy; 2006-{year} </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
