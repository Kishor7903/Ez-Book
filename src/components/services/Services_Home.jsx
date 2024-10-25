import React from "react"
import ServicesCard from "./services_card"
import img from "../../assets/chef.png"
import Container from "../container/Container";



function ServiceHome() {
    return (
        <Container>

            <div className="overflow-hidden flex justify-center flex-col max-w-screen">

                <h1 className="text-center">Services</h1>
                <ServicesCard classname='' img={img} />
                <ServicesCard classname='flex-row-reverse' img={img} />

            </div>
        </Container>

    )
}

export default ServiceHome;