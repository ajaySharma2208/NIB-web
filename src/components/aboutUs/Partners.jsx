import React from 'react'

const Partners = () => {
    const partners = [
        { name: 'Company 1', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 2', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 3', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 1', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 2', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 3', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
        { name: 'Company 4', logo: 'https://via.placeholder.com/100' },
      ];
    

  return (
    <section className="bg-white py-16">
    <div className="px-5 md:px-8 lg:px-12 xl:px-20 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center">
        {partners.map((partner, index) => (
          <div key={index} className="m-4">
            <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" />
            <p className="mt-2">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Partners