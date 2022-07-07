## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Explanation of the Issue

- There are 3 classes - BaseClass, DerivedXClass, DerivedClassY
- The DerivedXClass and DerivedYClass are inherited from the BaseClass
- There is a BaseResolver, which is inherited by the resolvers of the derived classes
- Inside the BaseResolver, there is a create mutation
- This create mutation takes in different arguments depending on the dervied class
- We pass the DTO of these arguments to the BaseResolver while inherting it in the derived resolvers
- The arguments are not being validated at all

My guess is that is has something to do with the type of the `args` set [here](https://github.com/snigdha920/nestjs-args-type/blob/main/src/base/base.resolver.ts#L18):

```
 @Args({ type: () => createClassArgsDtoRef }) args: Type<CreateBaseClassDto>
```

I want something like - to work:

```
@Args({ type: () => createClassArgsDtoRef }) args: typeof createClassArgsDtoRef
```

Essentially what I want to achieve is: Pass in the DTO class I want to use for validation of the arguments to the mutation in the base resolver, and have it work.

## Similar issues

- <https://github.com/nestjs/nest/issues/8274>
