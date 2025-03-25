const AboutUs = () => {
    return ( 
        <section className="py-5">
        <div className="container">
            <h2 className="text-center bg-secondary md-4 text-info">About us</h2>
            <p className="text-center">At <b>Primrose Tech</b>, we aim to provide quality services to clients and ensure that the product we sell are the best to provide maximum </p>

        </div>
        <section className="row">

         <div className="col-md-6">
            <h3 className="text-success text-center">Our Vision</h3>
            <p className="text-center">To be recognized as a trusted tech company within the community, offering a wide range of services and high quality products tailored to meet individuals needs. We aim to become a beacon of hope and reliabilty for anyone seeking our services.</p>

         </div>

         
          <div className="col-md-6">
            <h3 className="text-success text-center">Our Mission</h3>
            <p className="text-center">To provide quality tech services and products that meet the need of our clients while ensuring theirv well-being is our top priority. We strive to create a space where tech and compassion come together to build trust and long-term relationships. </p>

          </div>
        </section>

           <div className="mt-5">
            <h3 className="text-success text-center">Our Core Values</h3>
            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item"><strong>Compassion</strong>: we treat every client with care.</li>
                <li className="list-group-item"><strong>Integrity</strong>: Transparency and honesty define our practice.</li>
                <li className="list-group-item"><strong>Innovation</strong>: We continuosly update our services to include the latest technology advancements.</li>
                <li className="list-group-item"><strong>Community</strong>: We beleive in giving back to the community by promoting technology in the current world.</li>
            </ul>
           </div>

    
            
    
    </section>
     );
}
 
export default AboutUs;