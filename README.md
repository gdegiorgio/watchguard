# Watchguard

<p align="center">
  <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="200" />
</p>

> :warning: **This project is currently under development and not ready for a production environment**

Watchguard is a fast validation library for [Bun](https://github.com/oven-sh/bun) runtime. It is heavily influenced by [Joi](https://github.com/hapijs/joi) and [fluent-json-schema](https://github.com/fastify/fluent-json-schema)

## CONTRIBUTING

If you want to start contributing to this project,feel free to do so. 

Then open a branch on your project and make the changes. 
Once ready, open a pull request. 

This project follows the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) and [semantic-release](https://github.com/semantic-release/semantic-release) standards, which should also be applied regarding branch naming strategy. 

For example, if you want to change something in this file your branch name should be `docs(readme): update README.md`

You can also run `bun run commit` for getting help with commit writing
## Project roadmap
- [ ] Default schema
    - [ ] values 
    - [ ] not
    - [ ] optional
    - [ ] required
    - [ ] message
    - [ ] not
    - [ ] or
- [ ] String schema
    - [ ] alphanum
    - [ ] regex
    - [ ] lenght 
    - [ ] min
    - [ ] max
    - [ ] like
    - [ ] email
    - [ ] ip
- [ ] Number schema
    - [ ] range
    - [ ] positive
    - [ ] negative
    - [ ] int
    - [ ] float
- [ ] Array schema
    - [ ] length
    - [ ] contains
- [ ] Date schema
    - [ ] format
    - [ ] ISO8601
    - [ ] RFC1123
    - [ ] unix 
