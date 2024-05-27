# Yoroi

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/isc)
[![Font Awesome](https://img.shields.io/badge/Icons-Font%20Awesome%20Free-red)](https://fontawesome.com/)
[![Hugo](https://img.shields.io/badge/Static%20Site%20Builder-Hugo-green)](https://gohugo.io)

This is just a simple theme for my blog. 

I have used this as a learning experience to get deeper into Hugo. It may still have some rough edges though. 

Issues can be reported here on github.

## Features

- Home page with three latest posts as cards. Extra content can be added using the `_index.md` file in your content folder.
- Posts page with all posts as cards. Default paging set to 6. Obviously this can be changed in the `hugo.toml` file.
- Icon in navigation can be changed either by setting it in the `hugo.toml` file or overwriting the file in your static folder.
- The default navigation also includes an About page.
- Navigation items can be set in `hugo.toml`.
- Footer is set automatically from the site title and current year.
- Social icons are set in a data file and shown just above the footer. Icons are from the free collection of font-awesome.
- The category of a post also sets the blog post image. It defaults to a default image if none can be found.

## Installation

Place theme files in the themes folder and set `hugo.toml` to use it with 

```toml
theme = 'yoroi'
```

The blog post images should be placed in the `static/img/category` folder and have the naming convention: `{category}_500.webp` and `{category}_1024.webp`.

The default images are located in the theme folder structure at the same folder location as described above. They can be used as a reference for the naming scheme.

## Configuration

### Logo

If you'd like to change the logo it can be set using a custom setting

```toml
[params]
LogoFile = "img/logo.png"
```

### Menu

The default main menu is set in the configuration file as well. 

```toml
[[menus.main]]
name = 'Home'
pageRef = '/'
weight = 10

[[menus.main]]
name = 'Posts'
pageRef = '/posts'
weight = 20

[[menus.main]]
name = 'About'
pageRef = '/about'
weight = 30
```

### Others

Other settings I use include

```toml
summaryLength = 10
paginate = 6
```

I would suggest keeping paginate as a multiplication of 3. e.g. 3, 6, 9 or 12 to keep the grid like layout of the posts.
