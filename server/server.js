import app from './index.js'


app.listen(process.env.PORT , () => {
    console.log(`server is listening at ${process.env.PORT}`);
})