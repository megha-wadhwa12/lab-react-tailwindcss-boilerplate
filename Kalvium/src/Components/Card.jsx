import React from "react";

const Card = () => {
  return (
    <div className="p-2 max-w-md mx-auto rounded-xl shadow-xl flex items-center space-x-10 border mt-3.5 mb-12">
      <div className="flex items-center justify-item-center mx-2 my-auto gap-2">
        <div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EAEYQAAEEAQEEBQMPCgcAAAAAAAABAgMEEQUGEiExBxNBUYEUYXEVFiIyNTY3QlZzdJGywtFDUoKEoaKjsbPBIzNig5KT4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EADMRAAICAQIEAwUGBwAAAAAAAAABAgMRBBIhMUFREyJhBXGBsfAUI0KRwdEVMjNDkqGy/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVtsNpLmh2qUFKvFM6yjuD0VVyioiImF85aSh9IHvi2f+dT+owyubUMo7vZ1cLNQozWVx+TPvrl2t+T/APBk/EeuXa35PfwZPxLdqmq0tJr9ffsNib8VF4ud5kTmpTbG0mt7SSuq7NVHwV0XdfZfwX/lyb6EypnPy8NzydlGLluVEVHu20vmY3bb63Xuw1rum14HSPaite16Owq4zjJ0F72xsc97ka1qZc5VwiJ3nJ9c2edoV3SVntLYs2pt6V3Yio5nLPFea8VOma77iah9Fk+ypNUp+bd0Ka+qj7p0rhLPLPfHUzVr9O09WVbcEzkTKtjkRyonfwMs0scEbpZ5GRxt5ve5ERPE5n0Xq1us21cqIiVVVVXs9k087U61Y2p1SLStIR0lZH4YiflXJ8df9Kf++gr/ACbscSZeyn9pdSl5Ust9jpNa9TtPVlW3BM5EyrY5EcqJ4Eg1GzWg19BoJBFh8z8Omlxxe78E7EPN7anRKMzobOoRpI1cOaxrn7q9y7qLg1UsLMuB50qd9jjQnJe43JGdqFJk/k77lds2Ub1aytR2V5JjOTBpmtabquU0+5HM5qZVicHInfurxOb638I/69X+4Ust2pNcTo0ehd9koTzFpZ5HWAayDaDSbF7yKG9E61vKzquOd5M5T9iky7br0az7NuVsULMbz3ckyuDXcmccqpxai08s+XrtXT662Ls7IYUXCveuEz3H2lcrX67bFOZk0LuT2LlCs7SWdC2h0VUdqzIYoZ2qk7WqrWvw7CKnbwyZtm5NG0HZ5r2am2as6Zd6yqKiOevYidnBCm/zY6HU9MlRuw9+cYw/rJZwRqF+rqNfr6UzZosq3ebyyhGr6/pVm8lGC7E+0rnNSJM5y3KqnhhS+5dzm8Kzitr4c/T3myBq4totHlsvrM1CHro97faq43d3O9nPdhTxS2n0W9aSrVvsdMq4a1WubvL5lVERfAjfHuW+z3Yb2Ph6M24NNa2p0OpaWrPqEbZWrhyIjnI1e5VRMJ4qbeN7JGNfG5r2ORFa5q5RU70JUk+TKzqnBJyi1k9AAkzBz3pL631X0byb/P8AZdVy9vvMxz4c8czoRQukH3xbP/Op/UYY3/02ej7KeNVF+j+TNBpq0U1qT16Jd8pz+WzufpY447sex8DqtLyXyWLyHqfJt3/D6nG5jzY4GHVNKo6tB1N+uyVvxVXg5voXmhTZ9m9c2bmfa2atPnrquXVncV8W8nelMKVjGVXTK/2b221a/GZbJLo/5fh2PfST7p6D8677UZbtd9xNQ+iyfZU5nru0Dteu6Sk9V1ezVn3ZW9iqrmd/FOXJTpmu+4mofRZPsqK5KTm19cBqqp016eE1xWf+jitOay3rK1RXb1tqQuaxMq9FVPY+KohY+j/UYtL12Srcjax1j/BSRyeyjei+18yKvD0ohk6MYY5NdmfIxHOirq5iqntVyiZTwVU8ST0kaD1E6axWbiOZUbYRPiv5I7x5enHecsIyUFYuh7Wpvqsvlo5rG5c/Xp9fAv8AqUUs+n2Ya06QTSROayVU9oqpz8DmunaZsvp08vq1q8N5MYYyu2TCL2rlmc9nabGXXZ9b2CusR6rdrIxtjHN8e8mXehUzn0KafZK1s1Wrz+r1dslhX5jV8SyN3cJwREyiLnPPzG1k4ykv1PP0mmuopsTb54xHGffnngh6fNXrbYVZNHe9Kq3GMiV+UXccqIqceOOKpxJ2ufCN+vV/uGvhsRWdratiCulaCS7C6OJGo1Gs3m7vBOHLC+JsNc+Eb9er/cMPw/E9Nr75N8/Dfv5o97Zwu0Ta+O/C3DXuZZbjtci+yTxVP3jedJupMXSKVWF+UtvSXKdrGpn+at+ok9Jmn+U6LHcY3L6kmVx+Y7gv7d1fAotVZ9oNR0nT5VVUYxlZMfmIqqq+nd/ka2NwcoLqcWkjHUV06iX9vOfguBu9R0/1P6OaiuTElmy2d/6TVx+6jTA74No/p6/3LR0ltRuzcTWoiNSwxEROzg4rbIHy9GbnRtVUiuLI7CdmcZ/aJx2yaXYae52Uwsl1sLP0ae9r/ff/AGKjsx8IUf0qx9mQk7J7YVtD0iWpZrTSPSRz41jxurlE4Kqrw4+kg7HOkftxUfM3dldLMr24xhysflMekjfFqtIt4FlctVOSwmnj14MxadpzdW2vloySOZHLam6xWLx3UVyqnjjB92z0qDQNZZFRdIjOpbM3LuLFyqcF/RyTdlPhAf8AP2Pvn3pU93o/oLftvKOK8Jy65OiNs/t0Ks+XbyMu1WydTRtBr24pZX2Vka2VXL7F2UXOE7OKFq6O5XybLV0eudx8jW+jeXgRukj3sR/Ps/kpm6N/evF87J9o6IRUbsLseRfdO72ap2PL3foy0AA6jxAVbbDZu7rdulYpWIoXVkdxeq5zlFRUwnmLSCsoqSwzWi6dE1ZDmii+tva35Qfxn/gPW3tb8oE/7n/gXoFPBj6/mdX8Rt7R/wAV+xz1+xGt2L0Nq7qVed8b2qrnOcrlRFzjODoEsbJY3xytRzHorXNVOCovND0C0K4wzgx1Grsv27+nLCwQqWk6dp8jpKNKvXe5N1XRRo1VTu4EmxBFZhfDYjZLE9MOY9MoqedDIC2EuBg5yb3N8SDT0fTaMqy06NeCRzd1XRxoiqncR3bM6G6XrF0urvZzjq0x9XI2wI2x7F1fanlSefeQZ9G0yxYbYnoVnztxuyOjRXJjlx8x8l0bTJrnlktCs+zvI/rXRort5OS582EJ4J2rsQrbF+JmOeGKxC+GeNskT03XMcmUcncpEqaLpdKdJ6mn1oZURUR8caIqZ85PAwiqnJLCfAj3aVW/D1N2vHPFne3JG5TPeKlGpTrrXqVooYFVVWNjERq558CQBhcxvljbngauHZ3RobDZ4tMrNkauWqkaYRe9E5IZotH0yG55ZFQrMs7zndc2NEdl2crnz5X6ycCNsexZ3WPnJ/mQYNH02va8rgo147Cqq9a2NEdlefHz5F7R9N1CVJb1CvYkRu4jpI0cu7xXHo4r9ZOBO1csEeLPO7c8ke5Sq3oepuV454s53JGoqZ9B9p1K1GBIKcEcESKqoyNqNTK8+BnAws5I3S27c8AACSoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
            alt=""
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Kalvium Store</h2>
          <h4 className="text-sm text-gray-500">You have a new course!</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
