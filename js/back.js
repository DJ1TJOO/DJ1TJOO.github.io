registerPaint('back', class {
    paint(ctx, geom) {
        const bodyWidth = geom.width;
        const bodyHeight = geom.height;

        var openSpace = 0;
        var color = "#cccccc15";

        var rects = [];

        for (let i = 0; i < 15; i++) {
            let x = Math.random() * (bodyWidth - openSpace * 2) + openSpace;
            let y = Math.random() * (bodyHeight - openSpace * 2) + openSpace;
            let size = Math.random() * 80 + 60;
            let degrees = Math.random(0) * 360;

            var rect = {
                x: x,
                y: y,
                size: size,
                degrees: degrees
            };

            var overlapping = false;
            for (let j = 0; j < rects.length; j++) {
                const other = rects[j];
                let xDist = other.x - rect.x;
                let yDist = other.y - rect.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < rect.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            if (!overlapping)
                rects.push(rect);
        }

        var pentagons = [];

        for (let i = 0; i < 15; i++) {
            let x = Math.random() * (bodyWidth - openSpace * 2) + openSpace;
            let y = Math.random() * (bodyHeight - openSpace * 2) + openSpace;
            let size = Math.random() * 80 + 40;
            let degrees = Math.random(0) * 360;

            var pentagon = {
                x: x,
                y: y,
                size: size,
                degrees: degrees
            };

            var overlapping = false;
            for (let j = 0; j < pentagons.length; j++) {
                const other = pentagons[j];
                let xDist = other.x - pentagon.x;
                let yDist = other.y - pentagon.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < pentagon.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            for (let j = 0; j < rects.length; j++) {
                const other = rects[j];
                let xDist = other.x - pentagon.x;
                let yDist = other.y - pentagon.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < pentagon.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            if (!overlapping)
                pentagons.push(pentagon);
        }

        var triangles = [];

        for (let i = 0; i < 15; i++) {
            let x = Math.random() * (bodyWidth - openSpace * 2) + openSpace;
            let y = Math.random() * (bodyHeight - openSpace * 2) + openSpace;
            let size = Math.random() * 80 + 40;
            let degrees = Math.random(0) * 360;

            var triangle = {
                x: x,
                y: y,
                size: size,
                degrees: degrees
            };

            var overlapping = false;
            for (let j = 0; j < triangles.length; j++) {
                const other = triangles[j];
                let xDist = other.x - triangle.x;
                let yDist = other.y - triangle.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < triangle.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            for (let j = 0; j < rects.length; j++) {
                const other = rects[j];
                let xDist = other.x - triangle.x;
                let yDist = other.y - triangle.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < triangle.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            for (let j = 0; j < pentagons.length; j++) {
                const other = pentagons[j];
                let xDist = other.x - triangle.x;
                let yDist = other.y - triangle.y;
                var dist = Math.sqrt(xDist * xDist + yDist * yDist);
                if (dist < triangle.size + other.size + 10) {
                    var overlapping = true;
                    break;
                }
            }

            if (!overlapping)
                triangles.push(triangle);
        }

        triangles.forEach(triangle => {
            ctx.save();

            var numberOfSides = 3;
            var angle = 2 * Math.PI / numberOfSides;

            ctx.beginPath();
            ctx.translate(triangle.x + triangle.size / 2, triangle.y + triangle.size / 2);
            ctx.rotate(triangle.degrees * Math.PI / 180);

            ctx.moveTo(triangle.size, 0);
            for (var i = 1; i <= numberOfSides; i++) {
                ctx.lineTo(triangle.size * Math.cos(i * angle), triangle.size * Math.sin(i * angle));
            }

            ctx.fillStyle = color;
            ctx.fill();

            ctx.restore();
        });

        pentagons.forEach(pentagon => {
            ctx.save();

            var numberOfSides = 5;
            var angle = 2 * Math.PI / numberOfSides;

            ctx.beginPath();
            ctx.translate(pentagon.x + pentagon.size / 2, pentagon.y + pentagon.size / 2);
            ctx.rotate(pentagon.degrees * Math.PI / 180);

            ctx.moveTo(pentagon.size, 0);
            for (var i = 1; i <= numberOfSides; i++) {
                ctx.lineTo(pentagon.size * Math.cos(i * angle), pentagon.size * Math.sin(i * angle));
            }

            ctx.fillStyle = color;
            ctx.fill();

            ctx.restore();
        });

        rects.forEach(rect => {
            ctx.save();

            ctx.beginPath();
            ctx.translate(rect.x + rect.size / 2, rect.y + rect.size / 2);
            ctx.rotate(rect.degrees * Math.PI / 180);

            ctx.rect(-rect.size / 2, -rect.size / 2, rect.size, rect.size);

            ctx.fillStyle = color;
            ctx.fill();

            ctx.restore();
        });
    }
});