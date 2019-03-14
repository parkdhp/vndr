const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      // dont throw error because someone might not be logged in
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // check if user has permission to query all users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // if they do, query all the users. info will contain gql query that is requested from the front end
    return ctx.db.query.users({}, info);
  },
};

module.exports = Query;
