export default function CCEModal() {
    (async () => {
        console.log('Here inside!');
        const CCEverywhere = await import('CCEverywhere');
        console.log('Dynamically imported CCEverywhere Object in CCEModal component: ', CCEverywhere);
    })();

    console.log('Here outside!');
    return <div>HELLO From CCEModal!</div>;
}