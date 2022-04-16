const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../../models');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "pfrionjaelcpt"
};

const JWTStrategy = new Strategy(option, async (payload, done) => {
    const targetUser = await db.User.findOne({where: { id: payload.id } });
    // const targetUser = await db.User.findOne({where: { code: payload.code } });

    if(targetUser) {
        done(null, targetUser);
    } else {
        done(null, false);
    }

    // const targetCode = await db.User.findOne({where: { code: payload.code } });

    // if(targetCode) {
    //     done(null, targetCode);
    // } else {
    //     done(null, false);
    // }

});
    

passport.use("jwt", JWTStrategy);