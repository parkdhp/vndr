const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    // access db through server context
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates because this will give us the id that gets passed in and and we will not update the id
    delete updates.id;
    // run the update method, since returning promise based function will wait for update to pass
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      // how this update function knows what to return. This will contain the query that we send it from the client side to return the item
      info
    );
  },
};

module.exports = Mutations;
