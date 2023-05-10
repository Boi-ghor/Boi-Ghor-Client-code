import React from 'react'

function PrivacyPolicy() {
    return (
        <div className='p-10 space-y-4'>
            <h1 className='text-center text-4xl font-extrabold text-primary'>Bookbd Privacy Policy</h1>
            <p className='text-center text-xl text-primary'>At our bookstore, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and the choices you have regarding your personal information.</p>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Types of Personal Information Collected</h2>
                <p>We may collect the following types of personal information from customers who make purchases or create accounts on our website:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Shipping address</li>
                    <li>Billing address</li>
                    <li>Payment information (such as credit card number, expiration date, and security code)</li>
                </ul>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Use of Personal Information</h2>
                <p>We may use your personal information to:</p>
                <ul>
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders and account</li>
                    <li>Respond to your inquiries and customer service requests</li>
                    <li>Improve our website and customer service</li>
                    <li>Send you marketing communications and promotions (if you have opted-in to receive them)</li>
                </ul>
                <p>We do not sell or share your personal information with third parties for their marketing purposes.</p>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Data Security</h2>

                <p>We take appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. We use industry-standard encryption technologies to secure sensitive information like credit card numbers and passwords.</p>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Cookies and Tracking Technologies</h2>

                <p>Our website may use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information may be used to personalize your experience on our website and to show you targeted advertisements.</p>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Third-Party Links</h2>

                <p>Our website may contain links to third-party websites that are not under our control. We are not responsible for the privacy practices or content of those websites.</p>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Your Choices and Rights</h2>

                <p>You have the right to:</p>
                <ul>
                    <li>Access and correct your personal information</li>
                    <li>Request that we delete your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to the processing of your personal information</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p>If you wish to exercise any of these rights or have any questions about our Privacy Policy, please contact us at bookshopbd@bookshop.bookshopbd.</p>
            </div>
            <div class="divider"></div> 
            <div className='card-body bg-primary text-primary-content'>
                <h2 className="text-2xl text-center text-primary-content">Changes to the Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. If we make material changes, we will provide notice on our website and obtain your consent if required by law.</p>
                <p>Effective Date: 4/30/2023</p>
            </div>
            
        </div>
    )
}

export default PrivacyPolicy
