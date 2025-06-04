import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import User from './models/userModel.js'

dotenv.config()

const importAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    const adminExists = await User.findOne({ email: 'admin@123.com' })

    if (!adminExists) {
      const adminUser = new User({
        name: 'Admin',
        email: 'admin@123.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
      })

      await adminUser.save()
      console.log('✅ Admin user created!')
    } else {
      console.log('ℹ️ Admin already exists.')
    }

    process.exit()
  } catch (error) {
    console.error(`❌ Error: ${error.message}`)
    process.exit(1)
  }
}

importAdmin()
