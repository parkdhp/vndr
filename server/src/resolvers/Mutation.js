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
};

module.exports = Mutations;
