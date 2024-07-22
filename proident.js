   // Import the Pusher library
   const Pusher = require('@pusher/pusher');

   // Initialize the Pusher instance with your credentials
   const pusher = new Pusher({
     appId: 'YOUR_APP_ID',
     key: 'YOUR_APP_KEY',
     secret: 'YOUR_APP_SECRET',
     cluster: 'YOUR_APP_CLUSTER',
     useTLS: true
   });

   // Function to trigger an event
   async function triggerEvent(channel, eventName, data) {
     try {
       // Trigger the event
       let response = await pusher.trigger(channel, eventName, data);
       // Log the response status code
       console.log('HTTP Status:', response.statusCode);

       return response;
     } catch (error) {
       // Handle any errors
       console.error('Error triggering event:', error);
     }
   }

   // Example usage
   triggerEvent('my-channel', 'my-event', { message: 'Hello World!' })
     .then(response => {
       if (response) {
         // Do something with the successful response
         console.log('Event triggered successfully:', response);
       }
     })
     .catch(error => {
       // Handle any errors
       console.error('Failed to trigger event:', error);
     });
   