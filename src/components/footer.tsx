
 import React from 'react'
 import { useStaticQuery, graphql } from 'gatsby'
 import Image from 'gatsby-image'
import Link from './link'
 const Footer = () => {
   const data = useStaticQuery(graphql`
     query FooterQuery {
       site {
         siteMetadata {
           social {
             github
             resume
           }
         }
       }
     }
   `)
 
   const {  social } = data.site.siteMetadata
   return (
     <>
       <div
         style={{
           display: `flex`,
         }}
       >
         {social.github && (
           <Link href={`https://github.com/${social.github}`}>
               Github
           </Link>
         )}
       </div>
     </>
   )
 }
 export default Footer
 