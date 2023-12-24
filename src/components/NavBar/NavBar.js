import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div style={{ display: "flex" }}>
              <div id='navbarDiv'>
                <div className="dropdown">
                  <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories
                  </span>
                  <ul className="dropdown-menu">
                    <div style={{ display: "flex", padding: "20px" }}>
                      <div id='dropdownDiv'>
                        <div>
                          <li><Link><h6>Mobile</h6> </Link></li>
                          <li><Link>Mobiles Phones</Link></li>
                          <li><Link>Accessories</Link></li>
                          <li><Link>Smart Watches</Link></li>
                          <li><Link>Tablets</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Vehicles</h6></Link></li>
                          <li><Link>Cars</Link></li>
                          <li><Link>Car Accessories</Link></li>
                          <li><Link>Spare Parts</Link></li>
                          <li><Link>Bus,Van & Trucks</Link></li>
                          <li><Link>Rikshaw & Chingchi</Link></li>
                          <li><Link>Tractors & Trailers</Link></li>
                          <li><Link>Cars on Installments</Link></li>
                          <li><Link>Other Vehiles</Link></li>
                          <li><Link>Boats</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Property for sale</h6></Link></li>
                          <li><Link>Land & Plots</Link></li>
                          <li><Link>Houses</Link></li>
                          <li><Link>Apartments & Flats</Link></li>
                          <li><Link>Shope-Offices-Commercials Space</Link></li>
                          <li><Link>Portions & Floors</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Property For Rent</h6></Link></li>
                          <li><Link>Houses</Link></li>
                          <li><Link>Portions & Floors</Link></li>
                          <li><Link>Apartments & Flats</Link></li>
                          <li><Link>Shope-Offices-Commercials Space</Link></li>
                          <li><Link>Rooms</Link></li>
                          <li><Link>Roommates & Playing Guests</Link></li>
                          <li><Link>Vacation Rentals - Guest Houses</Link></li>
                          <li><Link>Land & Plots</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Electronics & Home Appliances </h6></Link></li>
                          <li><Link>Computers & Accessories</Link></li>
                          <li><Link>Video-Audios</Link></li>
                          <li><Link>Cameras & Accessories</Link></li>
                          <li><Link>Other Home Appliances</Link></li>
                          <li><Link>Generators, UPS & Power Solutions</Link></li>
                          <li><Link>Kitchen Appliances</Link></li>
                          <li><Link>Games & Entertainment</Link></li>
                          <li><Link>Refrigerators & Freezers</Link></li>
                          <li><Link>AC & Coolers</Link></li>
                          <li><Link>Televisions & Accessories</Link></li>
                          <li><Link>Washing Machines & Dryers</Link></li>
                          <li><Link>Heaters & Geysers</Link></li>
                          <li><Link>Microwaves & Ovens</Link></li>
                          <li><Link>Fans</Link></li>
                          <li><Link>Sewing Machines</Link></li>
                          <li><Link>Water Dispensers</Link></li>
                          <li><Link>Irons & Steamers</Link></li>
                          <li><Link>Air Purifiers & Humidifiers</Link></li>
                        </div>
                      </div>
                      <div id='dropdownDiv'>
                        <div>
                          <li><Link><h6>Bikes</h6></Link></li>
                          <li><Link>Motorcycles</Link></li>
                          <li><Link>Bicycles</Link></li>
                          <li><Link>Spare Parts</Link></li>
                          <li><Link>Bikes Accessories</Link></li>
                          <li><Link>Scooters</Link></li>
                          <li><Link>ATV & Quads</Link></li>
                        </div>
                        <div>
                          <li> <Link><h6>Business, Industrial & Agriculture</h6></Link></li>
                          <li><Link>Other Business & Industry</Link></li>
                          <li><Link>Food & Restaurants</Link></li>
                          <li><Link>Medical & Pharma</Link></li>
                          <li><Link>Trade & Industrial Machinery</Link></li>
                          <li><Link>Construction & Heavy Machinery</Link></li>
                          <li><Link>Business for Sale</Link></li>
                          <li><Link>Agriculture</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Servis</h6></Link></li>
                          <li><Link>Other Services</Link></li>
                          <li><Link>Tuitions & Academies</Link></li>
                          <li><Link>Domestic Help</Link></li>
                          <li><Link>Car Rental</Link></li>
                          <li><Link>Travel & Visa</Link></li>
                          <li><Link>Home & Office Repair</Link></li>
                          <li><Link>Web Development</Link></li>
                          <li><Link>Electronics & Computer Repair</Link></li>
                          <li><Link>Farm & Fresh Food</Link></li>
                          <li><Link>Movers & Packers</Link></li>
                          <li><Link>Construction Services</Link></li>
                          <li><Link>Health & Beauty</Link></li>
                          <li><Link>Drivers & Taxi</Link></li>
                          <li><Link>Consultancy Services</Link></li>
                          <li><Link>Video & Photography</Link></li>
                          <li><Link>Architecture & Interior Design</Link></li>
                          <li><Link>Car Services</Link></li>
                          <li><Link>Tailor Services</Link></li>
                          <li><Link>Catering & Restaurant</Link></li>
                          <li><Link>Camera Installation</Link></li>
                          <li><Link>Renting Services</Link></li>
                          <li><Link>Insurance Services</Link></li>
                        </div>
                      </div>
                      <div id='dropdownDiv'>
                        <div>
                          <li><Link><h6>Jobs</h6></Link></li>
                          <li><Link>Other Jobs</Link></li>
                          <li><Link>Content Writing</Link></li>
                          <li><Link>Part Time</Link></li>
                          <li><Link>Education</Link></li>
                          <li><Link>Sales</Link></li>
                          <li><Link>Marketing</Link></li>
                          <li><Link>Domestic Staff</Link></li>
                          <li><Link>Customer Service</Link></li>
                          <li><Link>Domestic Staff</Link></li>
                          <li><Link>Restaurants & Hospitality</Link></li>
                          <li><Link>Medical</Link></li>
                          <li><Link>Accounting & Finance</Link></li>
                          <li><Link>IT & Networking</Link></li>
                          <li><Link>Graphic Design</Link></li>
                          <li><Link>Hotels & Tourism</Link></li>
                          <li><Link>Delivery Riders</Link></li>
                          <li><Link>Clerical & Administration</Link></li>
                          <li><Link>Manufacturing</Link></li>
                          <li><Link>Engineering</Link></li>
                          <li><Link>Human Resources</Link></li>
                          <li><Link>Security</Link></li>
                          <li><Link>Real Estate</Link></li>
                          <li><Link>Advertising & PR</Link></li>
                          <li><Link>Internships</Link></li>
                          <li><Link>Architecture & Interior Design</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Animals</h6></Link></li>
                          <li><Link>Hens</Link></li>
                          <li><Link>Parrots</Link></li>
                          <li><Link>Cats</Link></li>
                          <li><Link>Dogs</Link></li>
                          <li><Link>Pet Food & Accessories</Link></li>
                          <li><Link>Pigeons</Link></li>
                          <li><Link>Livestock</Link></li>
                          <li><Link>Other Birds</Link></li>
                          <li><Link>Finches</Link></li>
                          <li><Link>Fish</Link></li>
                          <li><Link>Rabbits</Link></li>
                          <li><Link>Fertile Eggs</Link></li>
                          <li><Link>Doves</Link></li>
                          <li><Link>Ducks</Link></li>
                          <li><Link>Peacocks</Link></li>
                          <li><Link>Other Animals</Link></li>
                          <li><Link>Horses</Link></li>
                        </div>
                      </div>
                      <div id='dropdownDiv'>
                        <div>
                          <li><Link><h6>Furnetire & Home Decor</h6></Link></li>
                          <li><Link>Sofa & Chairs</Link></li>
                          <li><Link>Beds & Wardrobes</Link></li>
                          <li><Link>Other Household Items</Link></li>
                          <li><Link>Home Decoration</Link></li>
                          <li><Link>Tables & Dining</Link></li>
                          <li><Link>Office Furniture</Link></li>
                          <li><Link>Garden & Outdoor</Link></li>
                          <li><Link>Painting & Mirrors</Link></li>
                          <li><Link>Curtains & Blinds</Link></li>
                          <li><Link>Rugs & Carpets</Link></li>
                          <li><Link>Bathroom Accessories</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Fashion & Beauty</h6></Link></li>
                          <li><Link>Clothes</Link></li>
                          <li><Link>Wedding</Link></li>
                          <li><Link>Watches</Link></li>
                          <li><Link>Footwear</Link></li>
                          <li><Link>Skin & Hair</Link></li>
                          <li><Link>Jewellery</Link></li>
                          <li><Link>Bags</Link></li>
                          <li><Link>Makeup</Link></li>
                          <li><Link>Fragrance</Link></li>
                          <li><Link>Fashion Accessories</Link></li>
                          <li><Link>Other Fashion</Link></li>
                        </div>
                        <div>

                          <li><Link><h6>Books, Sports and Hobbies </h6></Link></li>
                          <li><Link>Other Hobbies</Link></li>
                          <li><Link>Gym & Fitness</Link></li>
                          <li><Link>Sports Equipment</Link></li>
                          <li><Link>Musical Instruments</Link></li>
                          <li><Link>Books & Magazines</Link></li>
                        </div>
                        <div>
                          <li><Link><h6>Kids</h6></Link></li>
                          <li><Link>Toys</Link></li>
                          <li><Link>Kids Vehicles</Link></li>
                          <li><Link>Kids Accessories</Link></li>
                          <li><Link>Kids Furniture</Link></li>
                          <li><Link>Baby Gear</Link></li>
                          <li><Link>Kids Clothing</Link></li>
                          <li><Link>Swings & Slides</Link></li>
                          <li><Link>Bath & Diapers</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div id='navbarDiv2'>
                <Link >
                  Mobile & Phone
                </Link>
                <Link>
                  Cars
                </Link>
                <Link>
                  Motorscycles
                </Link>
                <Link>
                  Houses
                </Link>
                <Link>
                  Videos-Audios
                </Link>
                <Link>
                  Tablets
                </Link>
                <Link>
                  Land & Plots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
