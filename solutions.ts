
const multiplyValue = (val: number, val2?: number): number => {
  if (val2 || val2 === 0) {
    return val * val2;
  }
  return val * 2;
};

const processInput = (val: string | number | boolean): string | number  => {
  if (typeof val === "string") {
    return val.trim().toLowerCase();
  }
  if (typeof val === "number") {
    return val * 10;
  }else{
    if (val) {
      return "Active";
    }
    return "Inactive";
  }
};

const formatCoordinate = (coordinate: readonly [number,number,string]):string=>{
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}

const concatenateArrays = <T>(...arrays:T[][]):T[]=>{
    return arrays.flat()
}

interface Course {
    title:string;
    students:number;
    isPublished:boolean;
}

const getPopularCourses = (courses: Course[],minStudents:number):Course[]=>{
        const result:Course[] = courses.filter((item:Course)=> item.isPublished && item.students >= minStudents);
        return result;
}

const pluckValues = <T,K extends keyof T>(items:T[],key:K):T[K][]=>{
    const result = items.map(item=> item[key])
    return result;
}

class Employee{
    constructor(
        protected name:string,
        private baseSalary:number
    ){}
    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(
        name:string,
        baseSalary:number,
        private department: string
    ){
        super(name,baseSalary)
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age:number):Promise<string>=>{
   const myPromise = new Promise<string>((resolve,reject)=>{
    if(age >= 18){
        setTimeout(()=>{
            resolve("Access Granted")
        },1000)
    }else{
        reject(new Error("Access Denied: Must be 18 or older"));
    }
   })
   return myPromise
}

