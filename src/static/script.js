import { $s, $e } from "./utils.js";

const probabilityLabel = $e({
    tagName: "p",
    innerText: "(98% de probabilidade)",
    attributes: {
        id: "probability",
    },
});

const resultDiv = $e(
    {
        tagName: "div",
        attributes: {
            class: "card-result hidden",
        },
    },
    $e({
        tagName: "p",
        innerText: "Sua doença é:",
    }),
    $e({
        tagName: "p",
        innerText: "Virose",
        attributes: {
            id: "result",
        },
    }),
    probabilityLabel
);

const consultButton = $e({
    tagName: "button",
    innerText: "Consultar",
    attributes: {
        type: "button",
    },
    events: {
        click: () => {
            resultDiv.classList.remove("hidden");
            probabilityLabel.innerText = `(${
                Math.floor(Math.random() * 15) + 90
            }% de probabilidade)`;
        },
    },
});

$e(
    {
        tagName: "body",
        container: $s("html"),
    },
    $e(
        {
            tagName: "div",
            attributes: {
                class: "container",
            },
        },
        $e(
            {
                tagName: "div",
                attributes: {
                    class: "card",
                },
            },

            // Title
            $e(
                {
                    tagName: "div",
                    attributes: {
                        class: "card-title",
                    },
                },
                $e({
                    tagName: "h1",
                    innerText: "SUS",
                }),
                $e({
                    tagName: "h2",
                    innerText: "IA de Consulta",
                })
            ),

            $e({ tagName: "hr" }),

            // Body
            $e(
                {
                    tagName: "div",
                    attributes: {
                        class: "card-body",
                    },
                },
                $e({
                    tagName: "p",
                    innerText: "Qual é seu principal sintoma?",
                }),
                $e(
                    {
                        tagName: "select",
                    },
                    $e({
                        tagName: "option",
                        innerText: "---",
                    }),
                    $e({
                        tagName: "option",
                        innerText: "Dor de cabeça",
                    }),
                    $e({
                        tagName: "option",
                        innerText: "Enjoo",
                    }),
                    $e({
                        tagName: "option",
                        innerText: "Falta de ar",
                    }),
                    $e({
                        tagName: "option",
                        innerText: "Falta de Deus",
                    })
                ),
                consultButton
            ),

            $e({ tagName: "hr" }),

            //  Result
            resultDiv
        )
    )
);
