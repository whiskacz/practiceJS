// // let zmienna1 = 55

// // if(zmienna1 > 80) console.log("nume jest większe od 80")
// // else console.log("num jest mniejsze od 80")

// // let tablica = [ 1, 2, 3, 4, 6]


// // let sum = 0
// // let i = 0 
// // while( i < tablica.length){
// //         sum += tablica[i]
// //         console.log(sum)
// //         i++
// // }
// // console.log(`suma ${sum}`)

// // let i = 0
// // let sum = 0
// // const tablica2 = [1,2,3,4,5,6,7,8,9,10]

// // while( i < tablica2.length){
// //     console.log(tablica2[i])
// //     sum += tablica2[i]
// //     i++
// // }
// // console.log(`suma jest ${sum}`)

// let t = 0
// let sum = 1;
// let sum2 = 1;
// let tablica3 = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < tablica3.length; i++){
//      if(i > 4) {
//     sum = sum * tablica3[i]
// }  
// }
// console.log(`suma wynosi ${sum}`)

// while( t < tablica3.length){
//     let e = tablica3[t]
//     if(e > 4){
//         sum2 = sum2 * e;
//     }
//     t++
// }
// console.log(`sum2 wynosi ${sum2}`)

// const tablica5 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
// let sum = 0

// for(let i = 0; i < tablica5.length; i++){
//     sum = sum + tablica5[i]
//     if(tablica5[i] > 0){
//         console.log(tablica5[i])
//     }
// }

// let tablica = [1,2,3,4,5,6,7,8,9,10]

// let sumaParzysta = 0, sumaNieparzysta = 0

// for(let i = 0; i< tablica.length; i++){
//     if(tablica[i] % 2 === 0){
//         console.log(`liczba parzysta ${tablica[i]}`)
//         sumaParzysta += tablica[i]
//     } else {console.log(`liczba nieparzysta ${tablica[i]}`)
//     sumaNieparzysta += tablica[i]
//     }
// }


// console.log(`suma parzysta wynosi ${sumaParzysta}`)
// console.log(`suma nieparzysta wynosi ${sumaNieparzysta}`)

// function multiply(a,b){
//     console.log(`iloczyn wynosi ${a*b}`)
// }

// multiply(2,10)

// function averageNum(a,b,c,d){
//     const result = (a+b+c+d)/4
    
// }
// console.log(averageNum(1,2,3,4))
// console.log(averageNum(30,50,60,70))
// console.log(averageNum(5,10,15,20))

// function createPhone(brand, name, system, color){
//     if(system !== "Android" && system !== "iOS") return null

//     let person = {
//         brand,
//         name,
//         system,
//         color
//     }
//     return person
// }

// console.log(createPhone("Sony","Xperia", "Android", "black"))
// console.log(createPhone("Iphone","Max", "iOS", "black"))
// console.log(createPhone("Nokia","NGAGE", "Symbian", "silver"))

// const addition = function(a,b){
//     return a+b
// }

// const test = addition

// console.log(addition(2,5))
// console.log(test(10,20))

// const callback = function(a){
//     console.log(a)
// }

// function greaterThan5(tablica,b){
//     for(let i = 0; i < tablica.length; i++){
//         if(tablica[i] > 5) 
//         b(tablica[i])
//     }
// }

// greaterThan5([1,2,3,4,5,6,7,8,9,10],callback)
// const tablica = [1,2,3,4,5]

// function reference(a){
//     for(let i = 0; i < a.length; i++){
//         a[i]*=2
//     }
// }
// reference(tablica)
// console.log(tablica)

// function createComputer(cpu,ram,dysk){
//     return {
//         cpu,
//         ram,
//         dysk
//     }
// }

// const obj = createComputer("amd","16gb", "1tb")

// function createLaptop(obj,type,weight){
//     return {
//         obj,
//         type,
//         weight
//     }
// }


// const edek2 = createLaptop(createComputer("amd","16gb", "1tb"),"laptop","3")


// console.log(edek2)


const szkola = {
    nazwa: "kolegium",
    miasto: "Wawa",
    studenci: [],
    addStudents: function(imie, nazwisko){
        const obj = {
            imie,
            nazwisko
        }  

        let index = this.studenci.length
        szkola.studenci[index]=obj
    },
    showstudents: function(){
        if(this.studenci.length === 0)
        console.log("nie ma studentów")
        else {
            for(let i = 0; i < this.studenci.length; i++){
                console.log(`${this.studenci[i].imie} ${this.studenci[i].nazwisko}`)
            }
        }
    },
    getNumStudents: function(){
        console.log(`liczba studenów wynosi ${this.studenci.length}`)
    },
    resetStudents: function(){
        this.studenci = []
    }
}
szkola.showstudents()
szkola.addStudents("henio", "jakistam")
szkola.addStudents("wieslaw","jarzyna")
szkola.showstudents()
szkola.getNumStudents()
szkola.resetStudents()
szkola.getNumStudents()
