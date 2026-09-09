<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.md">English</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="assets/mark.svg" alt="MCP Tool Shop" width="96" height="96">
</p>

<h1 align="center">MCP Tool Shop</h1>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml"><img src="https://github.com/mcp-tool-shop-org/.github/actions/workflows/docs-quality.yml/badge.svg" alt="Docs Quality"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/.github/"><img src="https://img.shields.io/badge/landing_page-live-blue" alt="Landing page"></a>
</p>

**स्थानीय-प्रथम एआई विकास के लिए ओपन-सोर्स उपकरण।** एमसीपी सर्वर, कमांड-लाइन उपकरण, प्रशिक्षण और डेटासेट पाइपलाइन, और गेम-उत्पादन उपकरण जो आपके अपने हार्डवेयर पर चलते हैं। एमआईटी लाइसेंस प्राप्त।

यह रिपॉजिटरी [mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) के लिए संगठन-व्यापी फ़ाइलों को संग्रहीत करता है: [संगठन प्रोफ़ाइल](profile/README.md), सामुदायिक स्वास्थ्य फ़ाइलें, ब्रांड किट, सीआई सुरक्षा उपाय और वे दस्तावेज़ जो बताते हैं कि संगठन में प्रत्येक रिपॉजिटरी को कैसे जारी और बनाए रखा जाता है।

## सामग्री

| पथ | यह क्या है |
|------|------------|
| `profile/README.md` | [github.com/mcp-tool-shop-org](https://github.com/mcp-tool-shop-org) पर दिखाया गया सार्वजनिक प्रोफ़ाइल |
| `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `SUPPORT.md`, `LICENSE` | सामुदायिक स्वास्थ्य फ़ाइलें, जो प्रत्येक रिपॉजिटरी द्वारा विरासत में प्राप्त की जाती हैं, जो स्वयं को परिभाषित नहीं करती हैं |
| `.github/ISSUE_TEMPLATE/`, `.github/DISCUSSION_TEMPLATE/`, `.github/pull_request_template.md` | डिफ़ॉल्ट मुद्दे, चर्चा और पुल अनुरोध टेम्पलेट |
| `docs/` | [Releasing](docs/RELEASING.md), [versioning](docs/VERSIONING.md), [branch policy](docs/BRANCH_POLICY.md), [maintenance](docs/MAINTENANCE.md), [badges](docs/BADGES.md), [provenance](docs/PROVENANCE.md) |
| `brand/` | [पैलट](brand/palette.md), टाइपोग्राफी और टोन, सोशल-प्रीव्यू टेम्पलेट और जेनरेटर |
| `site/` | [mcp-tool-shop-org.github.io/.github](https://mcp-tool-shop-org.github.io/.github/) पर एस्ट्रो लैंडिंग पृष्ठ |
| `llms.txt` | एआई एजेंटों के लिए संगठन का एक साधारण-पाठ सारांश |

## वर्कफ़्लो

| वर्कफ़्लो | ट्रिगर | उद्देश्य |
|----------|---------|---------|
| `docs-quality.yml` | पुश या पीआर `**/*.md` को प्रभावित करता है | मार्कडाउन लिंट और लिंक जांच |
| `org-guard.yml` | वर्कफ़्लो या दस्तावेज़ों को प्रभावित करने वाला पीआर | संगठन मानकों का अनुपालन स्कैन |
| `pages.yml` | पुश `site/**` को प्रभावित करता है | लैंडिंग पृष्ठ बनाएं और तैनात करें |

## उपकरणों के साथ शुरुआत करें

```bash
# Find MCP tools by describing what you need
npx @mcptoolshop/tool-compass

# Drive ComfyUI from Python, no node canvas required
pip install comfy-headless

# Fine-tune a local model and export GGUF for Ollama
pip install backpropagate

# Run the release quality gate on your own repository
npx @mcptoolshop/shipcheck audit
```

प्रत्येक रिपॉजिटरी के लिए पूर्ण कैटलॉग, जिसमें इंस्टॉलेशन कमांड और रिलीज़ इतिहास शामिल है, [mcptoolshop.com/tools](https://mcptoolshop.com/tools/) पर है।

## संगठन कैसे काम करता है

- **स्थानीय-प्रथम।** मुख्य कार्यक्षमता को कभी भी एपीआई कुंजी या होस्ट की गई सेवा की आवश्यकता नहीं होती है।
- **रिलीज़ गेट।** प्रत्येक टैग की गई रिलीज़ [शिपचेक](https://github.com/mcp-tool-shop-org/shipcheck) से गुजरती है: सुरक्षा नीति और खतरे का मॉडल, निकास कोड के साथ संरचित त्रुटियां, वर्तमान दस्तावेज़ और परिवर्तन लॉग, स्वच्छ पैकेजिंग। [docs/RELEASING.md](docs/RELEASING.md) देखें।
- **सिमेंटिक संस्करण।** रिलीज़ को GitHub पर टैग किया जाता है और सीआई से npm या PyPI पर प्रकाशित किया जाता है। [docs/VERSIONING.md](docs/VERSIONING.md) देखें।
- **तीन लेन।** प्रत्येक रीडमी बताता है कि क्या रिपॉजिटरी जारी की गई है, विकास में है, या संग्रहीत है। [docs/MAINTENANCE.md](docs/MAINTENANCE.md) देखें।
- **आठ भाषाएँ।** अधिकांश रिपॉजिटरी अंग्रेजी, जापानी, चीनी, स्पेनिश, फ्रेंच, हिंदी, इतालवी और ब्राजीलियाई पुर्तगाली में रीडमी जारी करते हैं, जिसे [polyglot-mcp](https://github.com/mcp-tool-shop-org/polyglot-mcp) के साथ स्थानीय रूप से अनुवादित किया जाता है।

## समर्थन और सुरक्षा

- प्रश्न और विचार: [GitHub चर्चाएँ](https://github.com/orgs/mcp-tool-shop-org/discussions)
- बग और सुविधा अनुरोध: प्रासंगिक रिपॉजिटरी पर एक मुद्दा खोलें। [SUPPORT.md](SUPPORT.md) में शामिल करने के लिए क्या है, इसकी सूची दी गई है।
- सुरक्षा: प्रभावित रिपॉजिटरी पर निजी भेद्यता रिपोर्टिंग का उपयोग करें। सार्वजनिक मुद्दा न खोलें। [SECURITY.md](SECURITY.md) देखें।

## लाइसेंस

एमआईटी। [LICENSE](LICENSE) देखें।
