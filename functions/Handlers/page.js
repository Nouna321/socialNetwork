const { admin, db } = require('../Util/admin')

exports.getallPage = (req, res) => {
    db.collection('Pages')
        .get()
        .then((data) => {
            let pages = []
            data.forEach((doc) => {
                pages.push(doc.data())
            })
            return res.json(pages)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({ error: 'something went wrong' })
        })
}

exports.getPages = (req, res) => {
    console.log(req.params.PageId)
    db.collection('Pages')
        .doc(req.params.PageId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                pageData.page = {
                    pageId: req.params.PageId,
                    pageName: doc.data().pageName,
                    createdAt: doc.data().createdAt,
                    likeCount: doc.data().likeCount,
                    owner: doc.data().owner,
                }
                return doc.ref
                    .collection('posts')
                    .orderBy('createdAt', 'desc')
                    .get()
                    .then((data) => {
                        pageData.posts = []
                        data.forEach((doc) => {
                            pageData.posts.push({
                                body: doc.data().body,
                                createdAt: doc.data().createdAt,
                                pageName: doc.data().pageName,
                                likeCount: doc.data().likeCount,
                                commentCount: doc.data().commentCount,
                                postId: doc.id,
                            })
                        })
                        return res.json(pageData)
                    })
            } else {
                return res.status(404).json({ errror: 'User not found' })
            }
        })
        .catch((err) => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.postPages = (req, res) => {
    const newPages = {
        pageName: req.body.pageName,
        owner: req.body.owner,
        likeCount: 0,
        createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    }
    db.collection('Pages')
        .add(newPages)
        .then((doc) => {
            newPages.PageId = doc.id
            res.json(newPages)
        })
        .catch((err) => {
            res.status(500).json({ message: 'Page non cree' })
            console.error(err)
        })
}

exports.putPages = (req, res) => {
    const document = db.doc(`/Pages/${req.params.pagesId}`)
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(404).json({ error: 'Page Not Found' })
            } else {
                return document.update({
                    pageName: req.body.pageName,
                })
            }
        })
        .then(() => {
            res.json({ message: 'page updated Successfully' })
        })
        .catch((err) => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.deletePages = (req, res) => {
    const pageId = req.params.pagesId
    db.collection('Pages')
        .doc(pageId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                doc.ref.delete().then(() => {
                    res.status(200).json({ message: 'page successfully deleted' })
                })
            } else {
                res.status(200).json({ message: 'page not faund' })
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ error: 'Something went wrong' })
        })
}

//publier posts des pages
exports.postPagePost = (req, res) => {
    if (req.body.body.trim() === '') {
        return res.status(400).json({ body: 'Body must not be empty' })
    }
    const newPagePosts = {
        username: req.body.username,
        likeCount: 0,
        commentCount: 0,
        body: req.body.body,
        createdAt: new Date().toISOString(),
    }
    db.doc(`/Pages/${req.params.pagesId}`)
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(200).json({ error: "la page n'existe pas " })
            }
        })
        .then(() => {
            return db.collection('Pages').doc(req.params.pagesId).collection('PagePosts').add(newPagePosts)
        })
        .then(() => {
            res.json(newPagePosts)
        })
        .catch((err) => {
            res.status(500).json({ error: '***Post Does Not Create***' })
            console.error(err)
        })
}
