import React from 'react';

function NotfoundPage() {
  return (
    <div className='container'>
       <div className="bg-faded p-4 my-4">
            <hr className="divider" />
            <h2 className="text-center text-lg text-uppercase my-0"><strong>Page Not Found</strong></h2>
            <hr className="divider" />
            <p className="text-center">
                <img src="img/404.jpg" alt="404 page" />
            </p>
        </div>
    </div>
  );
}

export default NotfoundPage;
