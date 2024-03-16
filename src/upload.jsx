export default function Component() {
  return (
    
    <div className="w-full py-12 bg-gray-100">
      <div className="container grid gap-6 lg:gap-0 px-4">
        <div className="grid max-w-sm gap-4 mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-0">
          <div className="flex flex-col items-center space-y-2 lg:col-span-2 lg:items-start lg:space-y-4">
            <h1 className="text-2xl font-bold">Student Sign Up</h1>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                {/* <Label htmlFor="student-name">Name</Label> */}
                <Input label="student-name" id="student-name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="student-email">Email</Label> */}
                <Input   label="Email:" id="student-email" placeholder="Enter your email" required type="email" />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="student-id">Student ID</Label> */}
                <Input  label="student-id" id="student-id" placeholder="Enter your student ID" required />
              </div>
            </div>
            <Button type="submit" className="btn-dark flex items-center justify-center gap-4 w-[45%] center">
                            Create Account
                        </Button>
          </div>
          <div className="flex flex-col items-center space-y-2 lg:items-start lg:space-y-4">
            <h1 className="text-2xl font-bold">Teacher Sign Up</h1>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                {/* <Label htmlFor="teacher-name">Name</Label> */}
                <Input   label="teacher-name " id="teacher-name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="teacher-email">Email</Label> */}
                <Input   label="teacher-email" id="teacher-email" placeholder="Enter your email" required type="email" />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="teacher-subject">Subject</Label> */}
                <Input  label="teacher-subject" id="teacher-subject" placeholder="Enter the subject you teach" required />
              </div>
            </div>
            <Button type="submit" className="btn-dark flex items-center justify-center gap-4 w-[95%] center">
                            Create Account
                        </Button>
      
          </div>
         
          <div className="flex ml-96  mt-8 w-full flex-col justify-content items-center space-y-2 lg:items-start lg:space-y-4">
            <h1 className="text-2xl font-bold">Admin Sign Up</h1>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                {/* <Label htmlFor="admin-name">Name</Label> */}
                <Input label="admin-name" id="admin-name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="admin-email">Email</Label> */}
                <Input label="admin-email" id="admin-email" placeholder="Enter your email" required type="email" />
              </div>
              <div className="grid gap-1.5">
                {/* <Label htmlFor="admin-department">Department</Label> */}
                <Input  label="admin-department" id="admin-department" placeholder="Enter your department" required />
              </div>
            </div>
            <Button type="submit" className="btn-dark flex items-center justify-center gap-4 w-[95%] center">
                            Create Account
                        </Button>
          </div>
         
        </div>
      </div>
    </div>
  )
}