import React from 'react'
import { render } from '@testing-library/react'
import MovieList from './MovieList'

const moviesDummies = [
    {
        "id": 6,
        "title": "Harry Potter and the Half-Blood Prince",
        "year": 2005,
        "genres": "Action, Adventure, Fantasy, Mystery",
        "starring": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "synopsis": "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again.",
        "cover": "Base64String"
    }
]

test("MovieList render", async () => {
    //AAA

    const { findAllByTestId } = render(<MovieList movies={moviesDummies}></MovieList>)
    const items = await findAllByTestId("MovieListGrid")

    expect(items).toHaveLength(1)
})
