import React from 'react'
import Button from '../components/Button'
import CardList from '../components/CardList'

const Home = () => {
    return (
        <>
            <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='container mx-auto p-4'>
                    <h2 className='text-5xl font-bold mb-4 text-blue-950'>Welcome to the Card Gallery</h2>
                    <p className='text-black mb-6 text-lg font-semibold'>Browse through our collection of cards and discover amazing designs.</p>
                    <Button nameButton="Explore Cards" />
                </div>
            </section>

            <section className='bg-white py-12'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-3xl font-bold text-purple-950 text-center mb-6'>
                        Explore our collection of cards showcasing various items.
                    </h1>
                    <p className='text-gray-700 text-center mb-8'>
                        Discover beautifully designed cards curated for inspiration and creativity. Browse through the gallery to find designs that spark your imagination.
                    </p>
                    <Button nameButton="Browse Collection" />
                </div>
            </section>

            <main className='container mx-auto my-8 p-4'>
                <h2 className='text-2xl font-semibold mb-4'>Card Gallery Reccommended</h2>
                <p className='text-gray-700 mb-4'>Explore our collection of cards showcasing various items.</p>
                <hr className='text-purple-200' />
                <CardList />
                <div className='flex justify-end mt-4'>
                    <Button nameButton="Load More" />
                </div>
            </main>

            <section className='bg-gradient-to-r from-purple-400 to-purple-950 text-white text-center my-8'>
                <div className='container mx-auto py-40'>
                    <h2 className='text-purple-50 mb-4 text-3xl font-bold'>About Us</h2>
                    <p className='text-gray-200 text-lg'>We are passionate about showcasing beautiful card designs. Our collection is curated to inspire creativity and provide a platform for designers to share their work.</p>
                    <p className='text-gray-200 text-lg'>Join us in exploring the world of card designs and discover the artistry behind each creation.</p>
                    <br />
                    <Button nameButton="About More" />
                </div>
            </section>
        </>
    )
}

export default Home