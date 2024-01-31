import React from 'react'
import Sidebardoc from "../Components/Sidebar/Sidebardoc";

function SupportDoc() {
    return (
        <div>
          <div>
           <Sidebardoc />
         </div>
         <div className='support-maincontent p-5'>
           <div className='support-main-content-box p-3'>
             <h1 className='text-center'>Welcome to the dashboard!</h1>
             <p className=''> This guide will walk you through the various features and functionalities available to you.</p>
             <ul className='support-list'>
               <li>
                 <h2>Doctor Dashboard</h2>
                 <p>This is the main landing page of the dashboard. Here, you can view your recent ratings and reviews. It provides a summary of your patients comments and ratings.</p>
               </li>
               <li>
                 <h2>Profile Update</h2>
                 <p>To update your profile, navigate to the "Profile" section. Here, you can choose from a set of avatars to decorate your profile. Select an avatar that represents you best and save the changes. Your updated profile will be reflected throughout the dashboard.</p>
                 </li>
               <li>
                 <h2>My Ratings</h2>
                 <p>In the "My Ratings" section, you can find ratings from your patients.  In this section, patients leave their ratings which will be displayed as an average rating for you. </p>
               </li>
               <li>
                 <h2>Support</h2>
                 <p>If you require assistance or have questions about using the dashboard, navigate to the "Support" section. Fill out the support form with your name, email, and message describing the issue or query you have. Submit the form, and our support team will get back to you as soon as possible.</p>
               </li>
               <li>
                 <h2>Logout</h2>
                 <p>To log out of the dashboard, click on the "Logout" button located in the sidebar. This will securely end your session and ensure your account remains protected.</p>
               </li>
             </ul>
           </div>
         </div>
        </div>
     
       )
     }

export default SupportDoc

