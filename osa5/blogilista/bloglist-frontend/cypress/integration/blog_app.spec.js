var user = ''

describe('Blog', function () {

    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        user = {
            name: 'Tero Testaaja',
            username: 'Tero',
            password: 'teronsalasana'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function () {
        cy.contains('Blogs')
        cy.contains('Log in to application')
        cy.contains('login').click()
    })

    describe('Login', function () {
        it('succeeds with correct credentials', function () {

            cy.get('#username').type('Tero')
            cy.get('#password').type('teronsalasana')
            cy.get('#login-button').click()

            cy.contains('Tero Testaaja logged in')
        })

        it('fails with wrong credentials', function () {
            cy.get('#username').type('Turo')
            cy.get('#password').type('turonsalasana')
            cy.get('#login-button').click()

            cy.contains('Log in to application')
            cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')
        })
    })


    describe('when logged in', function () {

        beforeEach(function () {
            cy.contains('login').click()
            cy.get('#username').type('Tero')
            cy.get('#password').type('teronsalasana')
            cy.get('#login-button').click()

            cy.contains('Tero Testaaja logged in')

        })

        it('a new blog can be created', function () {
            cy.get('#createNew').click()
            cy.get('#title').type('a blog created by cypress')
            cy.get('#author').type('this is author')
            cy.get('#url').type('this is url')

            cy.get('#createBlogButton').click()
            cy.contains('a blog created by cypress')
        })

        it('a new blog can be liked', function () {
            cy.get('#createNew').click()
            cy.get('#title').type('a blog created by cypress')
            cy.get('#author').type('this is author')
            cy.get('#url').type('this is url')

            cy.get('#createBlogButton').click()
            cy.contains('a blog created by cypress')

            cy.get('#toggleVisibility').click()
            cy.contains('likes 0')

            cy.get('#likeButton').click()
            cy.contains('likes 1')
        })

        it('a user can delete own Blog', function () {
            cy.get('#createNew').click()
            cy.get('#title').type('a second blog created by cypress')
            cy.get('#author').type('this is second author')
            cy.get('#url').type('this second is url')

            cy.get('#createBlogButton').click()
            cy.contains('a second blog created by cypress')

            cy.get('#toggleVisibility').click()
            cy.get('#deleteButton').click()

            cy.get('html').should('not.contain', 'a second blog created by cypress')
        })



        it('blogs are sorted by number of likes', function () {

            cy.get('#createNew').click()
            cy.get('#title').type('this is the first blog')
            cy.get('#author').type('this is author')
            cy.get('#url').type('this is url')
            cy.get('#createBlogButton').click()

            cy.get('#createNew').click()
            cy.get('#title').type('this is the second blog')
            cy.get('#author').type('this is author')
            cy.get('#url').type('this is url')
            cy.get('#createBlogButton').click()

            cy.get('#createNew').click()
            cy.get('#title').type('this is the third blog')
            cy.get('#author').type('this is author')
            cy.get('#url').type('this is url')
            cy.get('#createBlogButton').click()


            cy.contains('this is the first blog this is author').as('first').contains('view').click()
            cy.get('@first').parent().contains('like').click()

            cy.contains('this is the second blog this is author').as('second').contains('view').click()
            cy.get('@second').parent().contains('like').click()
            cy.get('@second').parent().contains('like').click()
            cy.get('@second').parent().contains('like').click()


            cy.contains('this is the third blog this is author').as('third').contains('view').click()
            cy.get('@third').parent().contains('like').click()
            cy.get('@third').parent().contains('like').click()


            cy.get('.blogStyle').then((div) => {
                expect(div[0]).to.contain('this is the second blog this is author')
                expect(div[1]).to.contain('this is the third blog this is author')
                expect(div[2]).to.contain('this is the first blog this is author')
            })
        })
    })
})
