import React from 'react'
import './about.css'
const About = props => {
  return (
    <div className='about'>
      <br />
      <div className='title'>
        What is beLocal? <br />
        beLocal is a web-based marketplace that promotes local tourism and
        communities. <br /> Here you can find and book eco-friendly activities
        offered by amazing local experts. <br />
        You can participate in one of our amazing activities or create you own!
        <hr />
        Everyone is welcome, but please respect some rules:
      </div>
      <div className='wrapper'>
        <div className='item'>
          <div className='polaroid'>
            <img src='https://previews.123rf.com/images/noche/noche1509/noche150900607/45476949-low-poly-greener-world.jpg' />
            <div className='caption'>
              We believe in <b> a greener world</b>, so all the activities
              should respect the environment and local communities.
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='polaroid'>
            <img src='https://research4me.accesscr.com.au/wp-content/uploads/2018/11/Share-Experience-.png' />
            <div className='caption'>
              We believe in the <b>power of sharing</b> experiences and
              knowledge, so all the activities should be low-cost.
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='polaroid'>
            <img src='https://previews.123rf.com/images/vitaliyukr/vitaliyukr1912/vitaliyukr191200080/135397941-counter-with-fresh-vegetables-and-a-sign-of-local-products-.jpg' />
            <div className='caption'>
              We promote <b>community-based ecotourism</b>, so use organic food
              and local products, if you need them.
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='polaroid'>
            <img src='https://www.ef.com/wwen/blog/wp-content/uploads/2019/04/volunteers.jpg' />
            <div className='caption'>
              We <b>create a community</b>, so all the activities booked through
              beLocal receive a special discount.{' '}
            </div>
          </div>
        </div>

        <div className='item'>
          <div className='polaroid'>
            <img src='https://image.ibb.co/fvekrc/action_adult_art_673649.jpg' />
            <div className='caption'>
              Have fun, <b>respect</b> others, self and the environment!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
