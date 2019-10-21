module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        console.log(db);
        
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occursed'});
            } else { 
                res.send(result.ops[0]  )
            }
        })
    })
}